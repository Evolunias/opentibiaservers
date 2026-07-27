import WithActivePlayersOpenTibiaServerUkKeywordPage, { generateMetadata } from './with-active-players-open-tibia-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOpenTibiaServerUkKeywordPage />;
}
