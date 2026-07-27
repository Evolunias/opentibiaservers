import EvoStatusBrazilKeywordPage, { generateMetadata } from './evo-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusBrazilKeywordPage />;
}
