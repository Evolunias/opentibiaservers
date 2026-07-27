import LowrateElderaDownloadKeywordPage, { generateMetadata } from './lowrate-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaDownloadKeywordPage />;
}
