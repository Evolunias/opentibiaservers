import EvoStatusUkKeywordPage, { generateMetadata } from './evo-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusUkKeywordPage />;
}
