import Tibia11RealMapServerKeywordPage, { generateMetadata } from './tibia-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapServerKeywordPage />;
}
