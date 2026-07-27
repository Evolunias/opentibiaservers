import Tibiaretro86RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86RealMapServerKeywordPage />;
}
