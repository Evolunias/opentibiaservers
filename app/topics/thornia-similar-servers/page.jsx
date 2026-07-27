import ThorniaSimilarServersKeywordPage, { generateMetadata } from './thornia-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSimilarServersKeywordPage />;
}
