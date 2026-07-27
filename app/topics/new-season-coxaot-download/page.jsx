import NewSeasonCoxaotDownloadKeywordPage, { generateMetadata } from './new-season-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotDownloadKeywordPage />;
}
