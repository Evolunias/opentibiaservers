import WithDiscordRealeraOtsKeywordPage, { generateMetadata } from './with-discord-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraOtsKeywordPage />;
}
