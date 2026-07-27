import WithDiscordNepreniaOtsKeywordPage, { generateMetadata } from './with-discord-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaOtsKeywordPage />;
}
