import Tibiaretro14PvpeServerKeywordPage, { generateMetadata } from './tibiaretro-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14PvpeServerKeywordPage />;
}
