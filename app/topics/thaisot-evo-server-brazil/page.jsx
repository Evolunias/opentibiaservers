import ThaisotEvoServerBrazilKeywordPage, { generateMetadata } from './thaisot-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerBrazilKeywordPage />;
}
