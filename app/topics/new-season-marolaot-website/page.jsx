import NewSeasonMarolaotWebsiteKeywordPage, { generateMetadata } from './new-season-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotWebsiteKeywordPage />;
}
