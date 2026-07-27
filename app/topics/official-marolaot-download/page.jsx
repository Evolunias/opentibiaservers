import OfficialMarolaotDownloadKeywordPage, { generateMetadata } from './official-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotDownloadKeywordPage />;
}
