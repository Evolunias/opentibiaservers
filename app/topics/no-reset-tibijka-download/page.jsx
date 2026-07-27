import NoResetTibijkaDownloadKeywordPage, { generateMetadata } from './no-reset-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaDownloadKeywordPage />;
}
