import TibiaRealMapServerPolandKeywordPage, { generateMetadata } from './tibia-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerPolandKeywordPage />;
}
