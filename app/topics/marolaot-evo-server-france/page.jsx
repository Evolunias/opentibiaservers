import MarolaotEvoServerFranceKeywordPage, { generateMetadata } from './marolaot-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotEvoServerFranceKeywordPage />;
}
