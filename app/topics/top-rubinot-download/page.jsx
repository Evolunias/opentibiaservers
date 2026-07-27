import TopRubinotDownloadKeywordPage, { generateMetadata } from './top-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotDownloadKeywordPage />;
}
