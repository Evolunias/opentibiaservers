import Tibiaretro15PvpeServerKeywordPage, { generateMetadata } from './tibiaretro-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15PvpeServerKeywordPage />;
}
