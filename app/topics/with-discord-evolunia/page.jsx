import WithDiscordEvoluniaKeywordPage, { generateMetadata } from './with-discord-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaKeywordPage />;
}
