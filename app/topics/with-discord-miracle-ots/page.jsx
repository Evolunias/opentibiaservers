import WithDiscordMiracleOtsKeywordPage, { generateMetadata } from './with-discord-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleOtsKeywordPage />;
}
