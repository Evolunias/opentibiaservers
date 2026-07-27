import Tibia80RealMapServerKeywordPage, { generateMetadata } from './tibia-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapServerKeywordPage />;
}
