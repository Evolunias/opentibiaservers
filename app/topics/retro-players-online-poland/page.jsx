import RetroPlayersOnlinePolandKeywordPage, { generateMetadata } from './retro-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlinePolandKeywordPage />;
}
