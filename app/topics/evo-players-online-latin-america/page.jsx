import EvoPlayersOnlineLatinAmericaKeywordPage, { generateMetadata } from './evo-players-online-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineLatinAmericaKeywordPage />;
}
