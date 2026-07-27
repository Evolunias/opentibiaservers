import WithDiscordSabrehavenLoginKeywordPage, { generateMetadata } from './with-discord-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenLoginKeywordPage />;
}
