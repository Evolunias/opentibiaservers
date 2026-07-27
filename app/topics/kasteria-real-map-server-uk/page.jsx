import KasteriaRealMapServerUkKeywordPage, { generateMetadata } from './kasteria-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServerUkKeywordPage />;
}
