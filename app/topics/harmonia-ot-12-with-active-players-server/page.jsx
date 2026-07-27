import HarmoniaOt12WithActivePlayersServerKeywordPage, { generateMetadata } from './harmonia-ot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12WithActivePlayersServerKeywordPage />;
}
