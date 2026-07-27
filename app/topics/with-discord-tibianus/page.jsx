import WithDiscordTibianusKeywordPage, { generateMetadata } from './with-discord-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusKeywordPage />;
}
