import WithDiscordMiracleKeywordPage, { generateMetadata } from './with-discord-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleKeywordPage />;
}
