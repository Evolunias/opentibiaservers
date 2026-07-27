import WithDiscordXanteriaServerKeywordPage, { generateMetadata } from './with-discord-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaServerKeywordPage />;
}
