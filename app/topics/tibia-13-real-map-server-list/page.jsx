import Tibia13RealMapServerListKeywordPage, { generateMetadata } from './tibia-13-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapServerListKeywordPage />;
}
