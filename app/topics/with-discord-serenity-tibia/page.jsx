import WithDiscordSerenityTibiaKeywordPage, { generateMetadata } from './with-discord-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityTibiaKeywordPage />;
}
