import RetroPlayersOnlineFranceKeywordPage, { generateMetadata } from './retro-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineFranceKeywordPage />;
}
