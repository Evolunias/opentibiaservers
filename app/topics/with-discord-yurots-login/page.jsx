import WithDiscordYurotsLoginKeywordPage, { generateMetadata } from './with-discord-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsLoginKeywordPage />;
}
