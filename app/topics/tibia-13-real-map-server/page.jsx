import Tibia13RealMapServerKeywordPage, { generateMetadata } from './tibia-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapServerKeywordPage />;
}
