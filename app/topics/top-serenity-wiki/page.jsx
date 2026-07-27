import TopSerenityWikiKeywordPage, { generateMetadata } from './top-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityWikiKeywordPage />;
}
