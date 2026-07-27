import EvoluniaEvoServerEuropeKeywordPage, { generateMetadata } from './evolunia-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEvoServerEuropeKeywordPage />;
}
