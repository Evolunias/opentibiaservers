import TibiantisMexicoServersKeywordPage, { generateMetadata } from './tibiantis-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisMexicoServersKeywordPage />;
}
