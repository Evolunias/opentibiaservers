import EvoPlayersOnlineNorthAmericaKeywordPage, { generateMetadata } from './evo-players-online-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineNorthAmericaKeywordPage />;
}
