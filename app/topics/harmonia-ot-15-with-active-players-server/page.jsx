import HarmoniaOt15WithActivePlayersServerKeywordPage, { generateMetadata } from './harmonia-ot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15WithActivePlayersServerKeywordPage />;
}
