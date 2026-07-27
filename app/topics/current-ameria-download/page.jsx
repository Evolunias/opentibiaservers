import CurrentAmeriaDownloadKeywordPage, { generateMetadata } from './current-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaDownloadKeywordPage />;
}
