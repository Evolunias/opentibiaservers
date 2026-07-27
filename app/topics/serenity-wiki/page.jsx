import SerenityWikiKeywordPage, { generateMetadata } from './serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWikiKeywordPage />;
}
