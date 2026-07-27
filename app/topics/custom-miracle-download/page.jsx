import CustomMiracleDownloadKeywordPage, { generateMetadata } from './custom-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleDownloadKeywordPage />;
}
