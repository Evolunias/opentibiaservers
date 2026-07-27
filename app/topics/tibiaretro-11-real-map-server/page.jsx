import Tibiaretro11RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11RealMapServerKeywordPage />;
}
