import ArcaniarlSimilarServersKeywordPage, { generateMetadata } from './arcaniarl-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSimilarServersKeywordPage />;
}
