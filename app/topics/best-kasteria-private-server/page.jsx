import BestKasteriaPrivateServerKeywordPage, { generateMetadata } from './best-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaPrivateServerKeywordPage />;
}
