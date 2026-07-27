import TibiaretroBossesKeywordPage, { generateMetadata } from './tibiaretro-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroBossesKeywordPage />;
}
