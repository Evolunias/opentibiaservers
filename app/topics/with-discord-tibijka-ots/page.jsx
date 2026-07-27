import WithDiscordTibijkaOtsKeywordPage, { generateMetadata } from './with-discord-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaOtsKeywordPage />;
}
