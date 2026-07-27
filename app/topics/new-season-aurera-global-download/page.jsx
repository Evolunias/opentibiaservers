import NewSeasonAureraGlobalDownloadKeywordPage, { generateMetadata } from './new-season-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalDownloadKeywordPage />;
}
