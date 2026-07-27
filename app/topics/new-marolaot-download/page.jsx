import NewMarolaotDownloadKeywordPage, { generateMetadata } from './new-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotDownloadKeywordPage />;
}
