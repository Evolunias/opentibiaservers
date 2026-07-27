import PopularOlderaDownloadKeywordPage, { generateMetadata } from './popular-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaDownloadKeywordPage />;
}
