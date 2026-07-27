import CurrentTibiaretroDiscordKeywordPage, { generateMetadata } from './current-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroDiscordKeywordPage />;
}
