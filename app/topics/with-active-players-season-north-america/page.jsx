import WithActivePlayersSeasonNorthAmericaKeywordPage, { generateMetadata } from './with-active-players-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonNorthAmericaKeywordPage />;
}
