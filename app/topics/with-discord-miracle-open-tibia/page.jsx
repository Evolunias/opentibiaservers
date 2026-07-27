import WithDiscordMiracleOpenTibiaKeywordPage, { generateMetadata } from './with-discord-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleOpenTibiaKeywordPage />;
}
