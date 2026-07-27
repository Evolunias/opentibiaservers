import TibiaraEvoServerArgentinaKeywordPage, { generateMetadata } from './tibiara-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerArgentinaKeywordPage />;
}
