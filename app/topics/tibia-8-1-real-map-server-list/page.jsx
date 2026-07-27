import Tibia81RealMapServerListKeywordPage, { generateMetadata } from './tibia-8-1-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapServerListKeywordPage />;
}
