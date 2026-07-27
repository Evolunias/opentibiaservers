import ThaisotEvoServerUsaKeywordPage, { generateMetadata } from './thaisot-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEvoServerUsaKeywordPage />;
}
