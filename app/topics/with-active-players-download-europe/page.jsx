import WithActivePlayersDownloadEuropeKeywordPage, { generateMetadata } from './with-active-players-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDownloadEuropeKeywordPage />;
}
