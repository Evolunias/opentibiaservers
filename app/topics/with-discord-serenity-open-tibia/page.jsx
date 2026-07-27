import WithDiscordSerenityOpenTibiaKeywordPage, { generateMetadata } from './with-discord-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityOpenTibiaKeywordPage />;
}
