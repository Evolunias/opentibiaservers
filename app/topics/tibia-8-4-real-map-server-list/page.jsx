import Tibia84RealMapServerListKeywordPage, { generateMetadata } from './tibia-8-4-real-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapServerListKeywordPage />;
}
