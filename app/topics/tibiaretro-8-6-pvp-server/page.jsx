import Tibiaretro86PvpServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86PvpServerKeywordPage />;
}
