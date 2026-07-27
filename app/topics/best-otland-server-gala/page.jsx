import BestOtlandServerGalaKeywordPage, { generateMetadata } from './best-otland-server-gala';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtlandServerGalaKeywordPage />;
}
