import TopTibiaraWikiKeywordPage, { generateMetadata } from './top-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraWikiKeywordPage />;
}
