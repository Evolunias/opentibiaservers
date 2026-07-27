import WithDiscordSabrehavenDiscordKeywordPage, { generateMetadata } from './with-discord-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenDiscordKeywordPage />;
}
