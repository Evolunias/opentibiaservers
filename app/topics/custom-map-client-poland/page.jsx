import CustomMapClientPolandKeywordPage, { generateMetadata } from './custom-map-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientPolandKeywordPage />;
}
