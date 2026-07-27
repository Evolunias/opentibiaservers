import WithDiscordXanteriaClientKeywordPage, { generateMetadata } from './with-discord-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaClientKeywordPage />;
}
