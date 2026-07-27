import WithDiscordEvoluniaDiscordKeywordPage, { generateMetadata } from './with-discord-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaDiscordKeywordPage />;
}
