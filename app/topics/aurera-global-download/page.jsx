import AureraGlobalDownloadKeywordPage, { generateMetadata } from './aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalDownloadKeywordPage />;
}
