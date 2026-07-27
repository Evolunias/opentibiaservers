import NoResetDownloadUsaKeywordPage, { generateMetadata } from './no-reset-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDownloadUsaKeywordPage />;
}
