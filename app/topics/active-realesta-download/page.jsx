import ActiveRealestaDownloadKeywordPage, { generateMetadata } from './active-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaDownloadKeywordPage />;
}
