import WithDiscordSabrehavenTibiaKeywordPage, { generateMetadata } from './with-discord-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenTibiaKeywordPage />;
}
