import Tibia772RealMapServerKeywordPage, { generateMetadata } from './tibia-7-72-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RealMapServerKeywordPage />;
}
