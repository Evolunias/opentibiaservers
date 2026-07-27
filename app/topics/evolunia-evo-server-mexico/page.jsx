import EvoluniaEvoServerMexicoKeywordPage, { generateMetadata } from './evolunia-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaEvoServerMexicoKeywordPage />;
}
