import Tibiaretro76RealMapServerKeywordPage, { generateMetadata } from './tibiaretro-7-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro76RealMapServerKeywordPage />;
}
