import NewSeasonMarolaotDownloadKeywordPage, { generateMetadata } from './new-season-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotDownloadKeywordPage />;
}
