import WithDiscordTibianusLoginKeywordPage, { generateMetadata } from './with-discord-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusLoginKeywordPage />;
}
