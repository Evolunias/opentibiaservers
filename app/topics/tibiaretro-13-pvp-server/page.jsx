import Tibiaretro13PvpServerKeywordPage, { generateMetadata } from './tibiaretro-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13PvpServerKeywordPage />;
}
