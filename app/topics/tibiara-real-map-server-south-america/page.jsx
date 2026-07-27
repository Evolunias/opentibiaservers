import TibiaraRealMapServerSouthAmericaKeywordPage, { generateMetadata } from './tibiara-real-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapServerSouthAmericaKeywordPage />;
}
