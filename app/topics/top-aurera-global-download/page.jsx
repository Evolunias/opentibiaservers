import TopAureraGlobalDownloadKeywordPage, { generateMetadata } from './top-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalDownloadKeywordPage />;
}
