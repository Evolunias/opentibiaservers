import WithDiscordXanteriaDiscordKeywordPage, { generateMetadata } from './with-discord-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaDiscordKeywordPage />;
}
