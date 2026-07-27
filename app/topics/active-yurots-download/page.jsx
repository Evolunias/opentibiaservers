import ActiveYurotsDownloadKeywordPage, { generateMetadata } from './active-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsDownloadKeywordPage />;
}
