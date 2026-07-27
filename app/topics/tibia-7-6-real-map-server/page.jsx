import Tibia76RealMapServerKeywordPage, { generateMetadata } from './tibia-7-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapServerKeywordPage />;
}
