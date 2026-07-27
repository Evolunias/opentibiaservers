import RealMapTibiaretroOtKeywordPage, { generateMetadata } from './real-map-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroOtKeywordPage />;
}
