import NtoStarEvoServerFranceKeywordPage, { generateMetadata } from './nto-star-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerFranceKeywordPage />;
}
