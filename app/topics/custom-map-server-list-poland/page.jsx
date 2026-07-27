import CustomMapServerListPolandKeywordPage, { generateMetadata } from './custom-map-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListPolandKeywordPage />;
}
