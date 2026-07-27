import WithActivePlayersClientGermanyKeywordPage, { generateMetadata } from './with-active-players-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientGermanyKeywordPage />;
}
