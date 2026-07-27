import SabrehavenWithActivePlayersServerUkKeywordPage, { generateMetadata } from './sabrehaven-with-active-players-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenWithActivePlayersServerUkKeywordPage />;
}
