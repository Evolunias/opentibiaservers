import TibiaretroPvpeKeywordPage, { generateMetadata } from './tibiaretro-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroPvpeKeywordPage />;
}
