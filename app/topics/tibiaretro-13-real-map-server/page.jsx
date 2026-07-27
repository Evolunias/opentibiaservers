import Tibiaretro13RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13RealMapServerKeywordPage />;
}
