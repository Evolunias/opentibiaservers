import NewSeasonRealestaDownloadKeywordPage, { generateMetadata } from './new-season-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaDownloadKeywordPage />;
}
