import CurrentBlazeraDownloadKeywordPage, { generateMetadata } from './current-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraDownloadKeywordPage />;
}
