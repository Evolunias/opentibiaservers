import TibiaraRealMapServerEuropeKeywordPage, { generateMetadata } from './tibiara-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapServerEuropeKeywordPage />;
}
