import Tibiaretro13PvpeServerKeywordPage, { generateMetadata } from './tibiaretro-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13PvpeServerKeywordPage />;
}
