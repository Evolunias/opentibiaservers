import TopMistOfDeathDownloadKeywordPage, { generateMetadata } from './top-mist-of-death-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMistOfDeathDownloadKeywordPage />;
}
