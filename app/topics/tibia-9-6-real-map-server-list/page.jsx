import Tibia96RealMapServerListKeywordPage, { generateMetadata } from './tibia-9-6-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapServerListKeywordPage />;
}
