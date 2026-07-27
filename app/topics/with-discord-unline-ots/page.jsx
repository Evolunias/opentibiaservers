import WithDiscordUnlineOtsKeywordPage, { generateMetadata } from './with-discord-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineOtsKeywordPage />;
}
