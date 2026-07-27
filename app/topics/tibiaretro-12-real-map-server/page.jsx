import Tibiaretro12RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12RealMapServerKeywordPage />;
}
