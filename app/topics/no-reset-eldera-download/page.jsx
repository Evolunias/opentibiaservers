import NoResetElderaDownloadKeywordPage, { generateMetadata } from './no-reset-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaDownloadKeywordPage />;
}
