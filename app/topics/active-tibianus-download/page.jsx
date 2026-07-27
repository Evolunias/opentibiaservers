import ActiveTibianusDownloadKeywordPage, { generateMetadata } from './active-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusDownloadKeywordPage />;
}
