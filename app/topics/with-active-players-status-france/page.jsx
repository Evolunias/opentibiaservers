import WithActivePlayersStatusFranceKeywordPage, { generateMetadata } from './with-active-players-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusFranceKeywordPage />;
}
