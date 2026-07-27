import ThaisotEvoServerNorthAmericaKeywordPage, { generateMetadata } from './thaisot-evo-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerNorthAmericaKeywordPage />;
}
