import PopularRubinotDownloadKeywordPage, { generateMetadata } from './popular-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotDownloadKeywordPage />;
}
