import Tibiaretro96RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96RealMapServerKeywordPage />;
}
