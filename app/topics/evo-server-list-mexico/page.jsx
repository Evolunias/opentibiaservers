import EvoServerListMexicoKeywordPage, { generateMetadata } from './evo-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListMexicoKeywordPage />;
}
