import WithDiscordAureraGlobalDiscordKeywordPage, { generateMetadata } from './with-discord-aurera-global-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAureraGlobalDiscordKeywordPage />;
}
