import CustomMapServerPolandKeywordPage, { generateMetadata } from './custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerPolandKeywordPage />;
}
