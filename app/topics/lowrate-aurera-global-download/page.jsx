import LowrateAureraGlobalDownloadKeywordPage, { generateMetadata } from './lowrate-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalDownloadKeywordPage />;
}
