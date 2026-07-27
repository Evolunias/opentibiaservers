import OfficialArcaniarlDownloadKeywordPage, { generateMetadata } from './official-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlDownloadKeywordPage />;
}
