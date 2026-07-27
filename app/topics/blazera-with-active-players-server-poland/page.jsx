import BlazeraWithActivePlayersServerPolandKeywordPage, { generateMetadata } from './blazera-with-active-players-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerPolandKeywordPage />;
}
