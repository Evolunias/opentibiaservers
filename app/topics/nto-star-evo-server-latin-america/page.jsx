import NtoStarEvoServerLatinAmericaKeywordPage, { generateMetadata } from './nto-star-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerLatinAmericaKeywordPage />;
}
