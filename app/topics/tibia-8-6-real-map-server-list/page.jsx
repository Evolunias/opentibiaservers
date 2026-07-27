import Tibia86RealMapServerListKeywordPage, { generateMetadata } from './tibia-8-6-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapServerListKeywordPage />;
}
