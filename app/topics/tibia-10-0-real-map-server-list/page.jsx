import Tibia100RealMapServerListKeywordPage, { generateMetadata } from './tibia-10-0-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapServerListKeywordPage />;
}
