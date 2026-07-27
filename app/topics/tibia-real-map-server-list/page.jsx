import TibiaRealMapServerListKeywordPage, { generateMetadata } from './tibia-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerListKeywordPage />;
}
