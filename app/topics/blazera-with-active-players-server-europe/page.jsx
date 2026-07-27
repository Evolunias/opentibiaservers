import BlazeraWithActivePlayersServerEuropeKeywordPage, { generateMetadata } from './blazera-with-active-players-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerEuropeKeywordPage />;
}
