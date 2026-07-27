import Tibia86RealMapServerKeywordPage, { generateMetadata } from './tibia-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapServerKeywordPage />;
}
