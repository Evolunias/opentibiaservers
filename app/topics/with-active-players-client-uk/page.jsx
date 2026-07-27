import WithActivePlayersClientUkKeywordPage, { generateMetadata } from './with-active-players-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientUkKeywordPage />;
}
