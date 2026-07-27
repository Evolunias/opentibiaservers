import BlazeraWithActivePlayersServerUkKeywordPage, { generateMetadata } from './blazera-with-active-players-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerUkKeywordPage />;
}
