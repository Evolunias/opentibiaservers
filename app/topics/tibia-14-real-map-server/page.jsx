import Tibia14RealMapServerKeywordPage, { generateMetadata } from './tibia-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapServerKeywordPage />;
}
