import RealMapStatusEuropeKeywordPage, { generateMetadata } from './real-map-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusEuropeKeywordPage />;
}
