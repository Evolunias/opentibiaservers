import Tibiaretro13NonPvpServerKeywordPage, { generateMetadata } from './tibiaretro-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13NonPvpServerKeywordPage />;
}
