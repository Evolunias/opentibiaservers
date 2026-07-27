import BestCyntaraServerKeywordPage, { generateMetadata } from './best-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraServerKeywordPage />;
}
