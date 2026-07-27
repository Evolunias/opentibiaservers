import RetroPlayersOnlineUsaKeywordPage, { generateMetadata } from './retro-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineUsaKeywordPage />;
}
