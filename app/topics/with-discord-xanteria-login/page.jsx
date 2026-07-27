import WithDiscordXanteriaLoginKeywordPage, { generateMetadata } from './with-discord-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaLoginKeywordPage />;
}
