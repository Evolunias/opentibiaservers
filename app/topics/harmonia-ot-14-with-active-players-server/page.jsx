import HarmoniaOt14WithActivePlayersServerKeywordPage, { generateMetadata } from './harmonia-ot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14WithActivePlayersServerKeywordPage />;
}
