import PopularTibiaraWikiKeywordPage, { generateMetadata } from './popular-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraWikiKeywordPage />;
}
