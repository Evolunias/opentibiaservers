import Tibia772RealMapServerListKeywordPage, { generateMetadata } from './tibia-7-72-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RealMapServerListKeywordPage />;
}
