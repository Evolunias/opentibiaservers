import EvoPlayersOnlineUsaKeywordPage, { generateMetadata } from './evo-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineUsaKeywordPage />;
}
