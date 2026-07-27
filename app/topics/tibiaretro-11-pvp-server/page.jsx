import Tibiaretro11PvpServerKeywordPage, { generateMetadata } from './tibiaretro-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11PvpServerKeywordPage />;
}
