import ActiveTibiaretroDiscordKeywordPage, { generateMetadata } from './active-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroDiscordKeywordPage />;
}
