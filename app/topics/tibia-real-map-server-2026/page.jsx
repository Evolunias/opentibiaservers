import TibiaRealMapServer2026KeywordPage, { generateMetadata } from './tibia-real-map-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServer2026KeywordPage />;
}
