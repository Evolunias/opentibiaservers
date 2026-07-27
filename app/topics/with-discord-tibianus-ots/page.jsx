import WithDiscordTibianusOtsKeywordPage, { generateMetadata } from './with-discord-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusOtsKeywordPage />;
}
