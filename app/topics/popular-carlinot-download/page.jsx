import PopularCarlinotDownloadKeywordPage, { generateMetadata } from './popular-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotDownloadKeywordPage />;
}
