import WithDiscordTibianusPrivateServerKeywordPage, { generateMetadata } from './with-discord-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusPrivateServerKeywordPage />;
}
