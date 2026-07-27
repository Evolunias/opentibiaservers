import Tibiaretro86NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86NonPvpServerKeywordPage />;
}
