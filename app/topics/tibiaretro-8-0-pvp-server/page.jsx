import Tibiaretro80PvpServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80PvpServerKeywordPage />;
}
