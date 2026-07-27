import HighrateSerenityWikiKeywordPage, { generateMetadata } from './highrate-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityWikiKeywordPage />;
}
