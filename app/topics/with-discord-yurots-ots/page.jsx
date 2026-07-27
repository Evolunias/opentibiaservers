import WithDiscordYurotsOtsKeywordPage, { generateMetadata } from './with-discord-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsOtsKeywordPage />;
}
