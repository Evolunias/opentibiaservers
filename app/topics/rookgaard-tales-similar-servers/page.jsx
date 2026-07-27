import RookgaardTalesSimilarServersKeywordPage, { generateMetadata } from './rookgaard-tales-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesSimilarServersKeywordPage />;
}
