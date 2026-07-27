import TibiaRealMapServerOldSchoolKeywordPage, { generateMetadata } from './tibia-real-map-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerOldSchoolKeywordPage />;
}
