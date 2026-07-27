import NewSeasonSerenityWikiKeywordPage, { generateMetadata } from './new-season-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityWikiKeywordPage />;
}
