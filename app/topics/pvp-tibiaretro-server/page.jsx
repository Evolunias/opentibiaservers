import PvpTibiaretroServerKeywordPage, { generateMetadata } from './pvp-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaretroServerKeywordPage />;
}
