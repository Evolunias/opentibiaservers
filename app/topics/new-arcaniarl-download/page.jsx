import NewArcaniarlDownloadKeywordPage, { generateMetadata } from './new-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlDownloadKeywordPage />;
}
