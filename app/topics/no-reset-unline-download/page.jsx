import NoResetUnlineDownloadKeywordPage, { generateMetadata } from './no-reset-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineDownloadKeywordPage />;
}
