import NewSeasonNostaltherDownloadKeywordPage, { generateMetadata } from './new-season-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherDownloadKeywordPage />;
}
