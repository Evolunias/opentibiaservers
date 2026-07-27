import WithActivePlayersInfernalOtServerKeywordPage, { generateMetadata } from './with-active-players-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersInfernalOtServerKeywordPage />;
}
