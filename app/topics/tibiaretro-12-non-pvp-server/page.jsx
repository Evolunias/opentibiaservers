import Tibiaretro12NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12NonPvpServerKeywordPage />;
}
