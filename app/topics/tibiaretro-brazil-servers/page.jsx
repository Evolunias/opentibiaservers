import TibiaretroBrazilServersKeywordPage, { generateMetadata } from './tibiaretro-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroBrazilServersKeywordPage />;
}
