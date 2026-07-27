import TibiaraEvoServerFranceKeywordPage, { generateMetadata } from './tibiara-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServerFranceKeywordPage />;
}
