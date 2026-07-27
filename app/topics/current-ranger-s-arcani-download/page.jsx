import CurrentRangerSArcaniDownloadKeywordPage, { generateMetadata } from './current-ranger-s-arcani-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniDownloadKeywordPage />;
}
