import Tibia12RealMapServerListKeywordPage, { generateMetadata } from './tibia-12-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapServerListKeywordPage />;
}
