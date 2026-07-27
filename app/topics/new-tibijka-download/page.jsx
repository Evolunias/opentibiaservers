import NewTibijkaDownloadKeywordPage, { generateMetadata } from './new-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaDownloadKeywordPage />;
}
