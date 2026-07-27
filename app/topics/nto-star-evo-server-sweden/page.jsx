import NtoStarEvoServerSwedenKeywordPage, { generateMetadata } from './nto-star-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerSwedenKeywordPage />;
}
