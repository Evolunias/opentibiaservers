import NoResetOlderaDownloadKeywordPage, { generateMetadata } from './no-reset-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaDownloadKeywordPage />;
}
