import BestTibiaretroDownloadKeywordPage, { generateMetadata } from './best-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroDownloadKeywordPage />;
}
