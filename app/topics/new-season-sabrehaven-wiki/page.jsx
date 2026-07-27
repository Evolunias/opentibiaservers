import NewSeasonSabrehavenWikiKeywordPage, { generateMetadata } from './new-season-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenWikiKeywordPage />;
}
