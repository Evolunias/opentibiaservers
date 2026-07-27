import WithActivePlayersServersEuropeKeywordPage, { generateMetadata } from './with-active-players-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServersEuropeKeywordPage />;
}
