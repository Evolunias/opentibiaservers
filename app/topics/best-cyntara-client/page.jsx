import BestCyntaraClientKeywordPage, { generateMetadata } from './best-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraClientKeywordPage />;
}
