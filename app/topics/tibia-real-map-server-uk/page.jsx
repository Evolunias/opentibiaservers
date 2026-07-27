import TibiaRealMapServerUkKeywordPage, { generateMetadata } from './tibia-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerUkKeywordPage />;
}
