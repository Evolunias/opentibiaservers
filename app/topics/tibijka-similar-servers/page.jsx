import TibijkaSimilarServersKeywordPage, { generateMetadata } from './tibijka-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSimilarServersKeywordPage />;
}
