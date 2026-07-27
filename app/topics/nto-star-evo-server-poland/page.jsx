import NtoStarEvoServerPolandKeywordPage, { generateMetadata } from './nto-star-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerPolandKeywordPage />;
}
