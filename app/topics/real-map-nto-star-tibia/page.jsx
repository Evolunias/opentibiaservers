import RealMapNtoStarTibiaKeywordPage, { generateMetadata } from './real-map-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarTibiaKeywordPage />;
}
