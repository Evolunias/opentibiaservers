import TibiaretroPvpKeywordPage, { generateMetadata } from './tibiaretro-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroPvpKeywordPage />;
}
