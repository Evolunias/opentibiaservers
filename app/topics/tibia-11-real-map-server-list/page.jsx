import Tibia11RealMapServerListKeywordPage, { generateMetadata } from './tibia-11-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapServerListKeywordPage />;
}
