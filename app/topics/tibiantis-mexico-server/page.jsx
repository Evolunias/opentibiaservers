import TibiantisMexicoServerKeywordPage, { generateMetadata } from './tibiantis-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisMexicoServerKeywordPage />;
}
