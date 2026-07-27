import FreshStartSerenityWikiKeywordPage, { generateMetadata } from './fresh-start-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityWikiKeywordPage />;
}
