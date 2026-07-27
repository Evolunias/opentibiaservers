import BestArcaniarlDownloadKeywordPage, { generateMetadata } from './best-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlDownloadKeywordPage />;
}
