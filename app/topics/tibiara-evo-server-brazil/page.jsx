import TibiaraEvoServerBrazilKeywordPage, { generateMetadata } from './tibiara-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerBrazilKeywordPage />;
}
