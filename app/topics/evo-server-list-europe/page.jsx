import EvoServerListEuropeKeywordPage, { generateMetadata } from './evo-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListEuropeKeywordPage />;
}
