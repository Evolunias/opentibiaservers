import ThaisotEvoServerLatinAmericaKeywordPage, { generateMetadata } from './thaisot-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerLatinAmericaKeywordPage />;
}
