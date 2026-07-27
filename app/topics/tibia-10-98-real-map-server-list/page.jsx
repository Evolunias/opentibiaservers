import Tibia1098RealMapServerListKeywordPage, { generateMetadata } from './tibia-10-98-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RealMapServerListKeywordPage />;
}
