import RetroPlayersOnlineCanadaKeywordPage, { generateMetadata } from './retro-players-online-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineCanadaKeywordPage />;
}
