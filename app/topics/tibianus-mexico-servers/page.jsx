import TibianusMexicoServersKeywordPage, { generateMetadata } from './tibianus-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusMexicoServersKeywordPage />;
}
