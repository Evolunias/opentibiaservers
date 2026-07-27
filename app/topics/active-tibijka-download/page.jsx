import ActiveTibijkaDownloadKeywordPage, { generateMetadata } from './active-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaDownloadKeywordPage />;
}
