import HighrateMarolaotDownloadKeywordPage, { generateMetadata } from './highrate-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotDownloadKeywordPage />;
}
