import NewTibiaretroDownloadKeywordPage, { generateMetadata } from './new-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroDownloadKeywordPage />;
}
