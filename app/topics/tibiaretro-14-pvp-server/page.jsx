import Tibiaretro14PvpServerKeywordPage, { generateMetadata } from './tibiaretro-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14PvpServerKeywordPage />;
}
