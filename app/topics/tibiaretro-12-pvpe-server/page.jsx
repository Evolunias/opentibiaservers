import Tibiaretro12PvpeServerKeywordPage, { generateMetadata } from './tibiaretro-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12PvpeServerKeywordPage />;
}
