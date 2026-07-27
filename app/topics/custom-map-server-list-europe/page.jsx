import CustomMapServerListEuropeKeywordPage, { generateMetadata } from './custom-map-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListEuropeKeywordPage />;
}
