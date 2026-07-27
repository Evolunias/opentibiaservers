import WithActivePlayersOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './with-active-players-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOpenTibiaServerEuropeKeywordPage />;
}
