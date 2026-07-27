import Tibia14RealMapServerListKeywordPage, { generateMetadata } from './tibia-14-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapServerListKeywordPage />;
}
