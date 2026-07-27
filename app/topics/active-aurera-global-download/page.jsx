import ActiveAureraGlobalDownloadKeywordPage, { generateMetadata } from './active-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalDownloadKeywordPage />;
}
