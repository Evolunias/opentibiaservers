import KyraWikiKeywordPage, { generateMetadata } from './kyra-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraWikiKeywordPage />;
}
