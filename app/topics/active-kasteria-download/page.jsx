import ActiveKasteriaDownloadKeywordPage, { generateMetadata } from './active-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaDownloadKeywordPage />;
}
