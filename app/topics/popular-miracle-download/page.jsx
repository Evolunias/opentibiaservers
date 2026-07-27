import PopularMiracleDownloadKeywordPage, { generateMetadata } from './popular-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleDownloadKeywordPage />;
}
