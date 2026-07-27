import Tibiaretro15PvpServerKeywordPage, { generateMetadata } from './tibiaretro-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15PvpServerKeywordPage />;
}
