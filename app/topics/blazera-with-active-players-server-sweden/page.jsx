import BlazeraWithActivePlayersServerSwedenKeywordPage, { generateMetadata } from './blazera-with-active-players-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerSwedenKeywordPage />;
}
