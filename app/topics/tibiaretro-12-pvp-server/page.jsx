import Tibiaretro12PvpServerKeywordPage, { generateMetadata } from './tibiaretro-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12PvpServerKeywordPage />;
}
