import RetroPlayersOnlineUkKeywordPage, { generateMetadata } from './retro-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineUkKeywordPage />;
}
