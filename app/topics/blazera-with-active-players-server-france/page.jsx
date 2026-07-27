import BlazeraWithActivePlayersServerFranceKeywordPage, { generateMetadata } from './blazera-with-active-players-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithActivePlayersServerFranceKeywordPage />;
}
