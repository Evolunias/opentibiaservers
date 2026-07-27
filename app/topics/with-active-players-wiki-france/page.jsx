import WithActivePlayersWikiFranceKeywordPage, { generateMetadata } from './with-active-players-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiFranceKeywordPage />;
}
