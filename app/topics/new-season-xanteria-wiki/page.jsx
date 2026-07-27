import NewSeasonXanteriaWikiKeywordPage, { generateMetadata } from './new-season-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaWikiKeywordPage />;
}
