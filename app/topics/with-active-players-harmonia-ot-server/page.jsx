import WithActivePlayersHarmoniaOtServerKeywordPage, { generateMetadata } from './with-active-players-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersHarmoniaOtServerKeywordPage />;
}
