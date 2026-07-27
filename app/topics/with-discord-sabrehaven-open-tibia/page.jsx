import WithDiscordSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './with-discord-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenOpenTibiaKeywordPage />;
}
