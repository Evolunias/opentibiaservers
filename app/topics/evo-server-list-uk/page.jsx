import EvoServerListUkKeywordPage, { generateMetadata } from './evo-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListUkKeywordPage />;
}
