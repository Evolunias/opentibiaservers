import CustomMapClientEuropeKeywordPage, { generateMetadata } from './custom-map-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientEuropeKeywordPage />;
}
