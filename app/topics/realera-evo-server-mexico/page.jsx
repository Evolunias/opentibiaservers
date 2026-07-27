import RealeraEvoServerMexicoKeywordPage, { generateMetadata } from './realera-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraEvoServerMexicoKeywordPage />;
}
