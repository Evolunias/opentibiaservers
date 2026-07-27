import EvoServerListSwedenKeywordPage, { generateMetadata } from './evo-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListSwedenKeywordPage />;
}
