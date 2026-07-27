import CurrentTibiameDownloadKeywordPage, { generateMetadata } from './current-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameDownloadKeywordPage />;
}
