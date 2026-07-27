import ActiveTibiameDownloadKeywordPage, { generateMetadata } from './active-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameDownloadKeywordPage />;
}
