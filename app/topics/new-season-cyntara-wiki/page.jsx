import NewSeasonCyntaraWikiKeywordPage, { generateMetadata } from './new-season-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraWikiKeywordPage />;
}
