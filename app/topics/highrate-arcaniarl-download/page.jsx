import HighrateArcaniarlDownloadKeywordPage, { generateMetadata } from './highrate-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlDownloadKeywordPage />;
}
