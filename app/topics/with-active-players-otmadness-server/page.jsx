import WithActivePlayersOtmadnessServerKeywordPage, { generateMetadata } from './with-active-players-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOtmadnessServerKeywordPage />;
}
