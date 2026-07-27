import MediviaEvoServerEuropeKeywordPage, { generateMetadata } from './medivia-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaEvoServerEuropeKeywordPage />;
}
