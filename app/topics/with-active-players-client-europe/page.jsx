import WithActivePlayersClientEuropeKeywordPage, { generateMetadata } from './with-active-players-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientEuropeKeywordPage />;
}
