import TopAmeriaDownloadKeywordPage, { generateMetadata } from './top-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaDownloadKeywordPage />;
}
