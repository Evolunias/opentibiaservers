import WithDiscordYurotsKeywordPage, { generateMetadata } from './with-discord-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsKeywordPage />;
}
