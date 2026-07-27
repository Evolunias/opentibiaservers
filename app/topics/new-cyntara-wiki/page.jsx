import NewCyntaraWikiKeywordPage, { generateMetadata } from './new-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraWikiKeywordPage />;
}
