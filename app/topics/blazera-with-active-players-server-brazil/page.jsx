import BlazeraWithActivePlayersServerBrazilKeywordPage, { generateMetadata } from './blazera-with-active-players-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerBrazilKeywordPage />;
}
