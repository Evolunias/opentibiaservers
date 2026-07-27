import WithDiscordSabrehavenClientKeywordPage, { generateMetadata } from './with-discord-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenClientKeywordPage />;
}
