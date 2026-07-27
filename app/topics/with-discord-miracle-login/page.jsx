import WithDiscordMiracleLoginKeywordPage, { generateMetadata } from './with-discord-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleLoginKeywordPage />;
}
