import NoResetCanobDownloadKeywordPage, { generateMetadata } from './no-reset-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobDownloadKeywordPage />;
}
