import WithActivePlayersSeasonCanadaKeywordPage, { generateMetadata } from './with-active-players-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonCanadaKeywordPage />;
}
