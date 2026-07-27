import WithActivePlayersServersUkKeywordPage, { generateMetadata } from './with-active-players-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServersUkKeywordPage />;
}
