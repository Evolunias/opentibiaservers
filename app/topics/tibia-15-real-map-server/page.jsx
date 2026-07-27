import Tibia15RealMapServerKeywordPage, { generateMetadata } from './tibia-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapServerKeywordPage />;
}
