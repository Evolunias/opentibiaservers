import NtoStarSimilarServersKeywordPage, { generateMetadata } from './nto-star-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSimilarServersKeywordPage />;
}
