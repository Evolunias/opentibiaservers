import WithDiscordSabrehavenServerKeywordPage, { generateMetadata } from './with-discord-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenServerKeywordPage />;
}
