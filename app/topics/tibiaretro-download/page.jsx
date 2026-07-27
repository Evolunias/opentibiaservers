import TibiaretroDownloadKeywordPage, { generateMetadata } from './tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroDownloadKeywordPage />;
}
