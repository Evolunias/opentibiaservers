import CurrentSerenityWikiKeywordPage, { generateMetadata } from './current-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityWikiKeywordPage />;
}
