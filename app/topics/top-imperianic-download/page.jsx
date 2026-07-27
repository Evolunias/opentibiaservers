import TopImperianicDownloadKeywordPage, { generateMetadata } from './top-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicDownloadKeywordPage />;
}
