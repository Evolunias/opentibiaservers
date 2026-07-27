import NewAureraGlobalDownloadKeywordPage, { generateMetadata } from './new-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalDownloadKeywordPage />;
}
