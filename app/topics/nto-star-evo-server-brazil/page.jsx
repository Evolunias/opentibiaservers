import NtoStarEvoServerBrazilKeywordPage, { generateMetadata } from './nto-star-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerBrazilKeywordPage />;
}
