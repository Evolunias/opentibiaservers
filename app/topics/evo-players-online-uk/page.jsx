import EvoPlayersOnlineUkKeywordPage, { generateMetadata } from './evo-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineUkKeywordPage />;
}
