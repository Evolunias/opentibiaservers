import EvoServerListArgentinaKeywordPage, { generateMetadata } from './evo-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListArgentinaKeywordPage />;
}
