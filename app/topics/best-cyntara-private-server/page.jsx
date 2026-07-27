import BestCyntaraPrivateServerKeywordPage, { generateMetadata } from './best-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraPrivateServerKeywordPage />;
}
