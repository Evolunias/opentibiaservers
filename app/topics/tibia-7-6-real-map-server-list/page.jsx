import Tibia76RealMapServerListKeywordPage, { generateMetadata } from './tibia-7-6-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapServerListKeywordPage />;
}
