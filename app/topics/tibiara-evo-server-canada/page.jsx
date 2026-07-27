import TibiaraEvoServerCanadaKeywordPage, { generateMetadata } from './tibiara-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerCanadaKeywordPage />;
}
