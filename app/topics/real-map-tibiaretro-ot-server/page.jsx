import RealMapTibiaretroOtServerKeywordPage, { generateMetadata } from './real-map-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroOtServerKeywordPage />;
}
