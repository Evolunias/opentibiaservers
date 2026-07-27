import ActiveArcaniarlDownloadKeywordPage, { generateMetadata } from './active-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlDownloadKeywordPage />;
}
