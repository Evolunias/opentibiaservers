import ActiveCarlinotDownloadKeywordPage, { generateMetadata } from './active-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotDownloadKeywordPage />;
}
