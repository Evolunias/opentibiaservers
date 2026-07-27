import TopElderaDownloadKeywordPage, { generateMetadata } from './top-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaDownloadKeywordPage />;
}
