import HighrateTibiaretroDiscordKeywordPage, { generateMetadata } from './highrate-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroDiscordKeywordPage />;
}
