import Tibia71RealMapServerListKeywordPage, { generateMetadata } from './tibia-7-1-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapServerListKeywordPage />;
}
