import BestTibiaRealMapServerKeywordPage, { generateMetadata } from './best-tibia-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaRealMapServerKeywordPage />;
}
