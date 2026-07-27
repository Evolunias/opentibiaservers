import CustomMapStatusEuropeKeywordPage, { generateMetadata } from './custom-map-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusEuropeKeywordPage />;
}
