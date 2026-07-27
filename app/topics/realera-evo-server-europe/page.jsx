import RealeraEvoServerEuropeKeywordPage, { generateMetadata } from './realera-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraEvoServerEuropeKeywordPage />;
}
