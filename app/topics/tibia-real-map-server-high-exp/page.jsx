import TibiaRealMapServerHighExpKeywordPage, { generateMetadata } from './tibia-real-map-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerHighExpKeywordPage />;
}
