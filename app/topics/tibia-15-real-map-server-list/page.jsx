import Tibia15RealMapServerListKeywordPage, { generateMetadata } from './tibia-15-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapServerListKeywordPage />;
}
