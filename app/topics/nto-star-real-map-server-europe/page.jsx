import NtoStarRealMapServerEuropeKeywordPage, { generateMetadata } from './nto-star-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerEuropeKeywordPage />;
}
