import TibiaRealMapServerScreenshotsKeywordPage, { generateMetadata } from './tibia-real-map-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerScreenshotsKeywordPage />;
}
