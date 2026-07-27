import Tibiaretro81PvpServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81PvpServerKeywordPage />;
}
