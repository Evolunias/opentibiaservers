import NoResetBlazeraDownloadKeywordPage, { generateMetadata } from './no-reset-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraDownloadKeywordPage />;
}
