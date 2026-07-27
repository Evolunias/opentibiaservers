import TibiaraEvoServerUkKeywordPage, { generateMetadata } from './tibiara-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerUkKeywordPage />;
}
