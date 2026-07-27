import WithActivePlayersGuideFranceKeywordPage, { generateMetadata } from './with-active-players-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideFranceKeywordPage />;
}
