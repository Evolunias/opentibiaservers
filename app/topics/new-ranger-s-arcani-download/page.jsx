import NewRangerSArcaniDownloadKeywordPage, { generateMetadata } from './new-ranger-s-arcani-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniDownloadKeywordPage />;
}
