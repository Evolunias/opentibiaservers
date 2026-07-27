import NewAmeriaDownloadKeywordPage, { generateMetadata } from './new-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaDownloadKeywordPage />;
}
