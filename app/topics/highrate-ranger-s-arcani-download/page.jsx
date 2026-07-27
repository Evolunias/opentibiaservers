import HighrateRangerSArcaniDownloadKeywordPage, { generateMetadata } from './highrate-ranger-s-arcani-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRangerSArcaniDownloadKeywordPage />;
}
