import Tibiaretro96PvpServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96PvpServerKeywordPage />;
}
