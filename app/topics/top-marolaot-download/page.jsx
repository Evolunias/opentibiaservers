import TopMarolaotDownloadKeywordPage, { generateMetadata } from './top-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotDownloadKeywordPage />;
}
