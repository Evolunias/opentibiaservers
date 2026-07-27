import Tibia80RealMapClientKeywordPage, { generateMetadata } from './tibia-8-0-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapClientKeywordPage />;
}
