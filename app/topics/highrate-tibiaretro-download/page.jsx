import HighrateTibiaretroDownloadKeywordPage, { generateMetadata } from './highrate-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroDownloadKeywordPage />;
}
