import TibiantisEvoServerFranceKeywordPage, { generateMetadata } from './tibiantis-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisEvoServerFranceKeywordPage />;
}
