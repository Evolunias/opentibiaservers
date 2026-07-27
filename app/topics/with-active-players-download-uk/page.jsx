import WithActivePlayersDownloadUkKeywordPage, { generateMetadata } from './with-active-players-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDownloadUkKeywordPage />;
}
