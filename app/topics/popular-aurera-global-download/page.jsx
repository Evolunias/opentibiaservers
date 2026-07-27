import PopularAureraGlobalDownloadKeywordPage, { generateMetadata } from './popular-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalDownloadKeywordPage />;
}
