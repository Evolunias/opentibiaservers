import BestCyntaraWikiKeywordPage, { generateMetadata } from './best-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraWikiKeywordPage />;
}
