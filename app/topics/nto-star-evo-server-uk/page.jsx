import NtoStarEvoServerUkKeywordPage, { generateMetadata } from './nto-star-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerUkKeywordPage />;
}
