import ActiveClassicusDownloadKeywordPage, { generateMetadata } from './active-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusDownloadKeywordPage />;
}
