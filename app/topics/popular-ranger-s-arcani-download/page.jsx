import PopularRangerSArcaniDownloadKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniDownloadKeywordPage />;
}
