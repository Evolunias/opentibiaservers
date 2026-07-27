import PopularMarolaotDownloadKeywordPage, { generateMetadata } from './popular-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotDownloadKeywordPage />;
}
