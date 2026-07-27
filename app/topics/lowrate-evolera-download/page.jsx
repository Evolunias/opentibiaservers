import LowrateEvoleraDownloadKeywordPage, { generateMetadata } from './lowrate-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraDownloadKeywordPage />;
}
