import ShadowcoresEvoServerFranceKeywordPage, { generateMetadata } from './shadowcores-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresEvoServerFranceKeywordPage />;
}
