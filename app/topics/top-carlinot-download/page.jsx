import TopCarlinotDownloadKeywordPage, { generateMetadata } from './top-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotDownloadKeywordPage />;
}
