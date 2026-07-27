import RetroPlayersOnlineEuropeKeywordPage, { generateMetadata } from './retro-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineEuropeKeywordPage />;
}
