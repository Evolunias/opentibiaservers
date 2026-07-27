import WithDiscordYurotsClientKeywordPage, { generateMetadata } from './with-discord-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsClientKeywordPage />;
}
