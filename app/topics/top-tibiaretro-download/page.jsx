import TopTibiaretroDownloadKeywordPage, { generateMetadata } from './top-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroDownloadKeywordPage />;
}
