import ArcaniarlEvoServerSwedenKeywordPage, { generateMetadata } from './arcaniarl-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlEvoServerSwedenKeywordPage />;
}
