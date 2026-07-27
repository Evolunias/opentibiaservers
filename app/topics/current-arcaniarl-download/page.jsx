import CurrentArcaniarlDownloadKeywordPage, { generateMetadata } from './current-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlDownloadKeywordPage />;
}
