import Tibiaretro11NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11NonPvpServerKeywordPage />;
}
