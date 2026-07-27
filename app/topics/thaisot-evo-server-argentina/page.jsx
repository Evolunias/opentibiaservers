import ThaisotEvoServerArgentinaKeywordPage, { generateMetadata } from './thaisot-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerArgentinaKeywordPage />;
}
