import NewSerenityWikiKeywordPage, { generateMetadata } from './new-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityWikiKeywordPage />;
}
