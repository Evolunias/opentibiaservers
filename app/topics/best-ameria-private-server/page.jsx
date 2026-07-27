import BestAmeriaPrivateServerKeywordPage, { generateMetadata } from './best-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaPrivateServerKeywordPage />;
}
