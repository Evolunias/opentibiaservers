import WithDiscordKasteriaOtsKeywordPage, { generateMetadata } from './with-discord-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaOtsKeywordPage />;
}
