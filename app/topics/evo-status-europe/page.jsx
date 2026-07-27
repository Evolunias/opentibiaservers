import EvoStatusEuropeKeywordPage, { generateMetadata } from './evo-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusEuropeKeywordPage />;
}
