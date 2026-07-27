import BestCyntaraWebsiteKeywordPage, { generateMetadata } from './best-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraWebsiteKeywordPage />;
}
