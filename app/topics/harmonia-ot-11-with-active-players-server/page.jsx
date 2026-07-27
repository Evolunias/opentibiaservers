import HarmoniaOt11WithActivePlayersServerKeywordPage, { generateMetadata } from './harmonia-ot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11WithActivePlayersServerKeywordPage />;
}
