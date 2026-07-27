import Tibiaretro15NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15NonPvpServerKeywordPage />;
}
