import ActiveMediviaDownloadKeywordPage, { generateMetadata } from './active-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaDownloadKeywordPage />;
}
