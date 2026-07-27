import Tibiaretro80PvpeServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80PvpeServerKeywordPage />;
}
