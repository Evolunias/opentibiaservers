import BlazeraWithActivePlayersServerArgentinaKeywordPage, { generateMetadata } from './blazera-with-active-players-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerArgentinaKeywordPage />;
}
