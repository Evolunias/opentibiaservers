import TibiaraWithActivePlayersServerLatinAmericaKeywordPage, { generateMetadata } from './tibiara-with-active-players-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithActivePlayersServerLatinAmericaKeywordPage />;
}
