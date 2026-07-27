import WithDiscordMiracleClientKeywordPage, { generateMetadata } from './with-discord-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleClientKeywordPage />;
}
