import EvoServersEuropeKeywordPage, { generateMetadata } from './evo-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersEuropeKeywordPage />;
}
