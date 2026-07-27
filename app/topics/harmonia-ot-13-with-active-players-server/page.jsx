import HarmoniaOt13WithActivePlayersServerKeywordPage, { generateMetadata } from './harmonia-ot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13WithActivePlayersServerKeywordPage />;
}
