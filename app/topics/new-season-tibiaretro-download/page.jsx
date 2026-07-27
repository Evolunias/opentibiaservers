import NewSeasonTibiaretroDownloadKeywordPage, { generateMetadata } from './new-season-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroDownloadKeywordPage />;
}
