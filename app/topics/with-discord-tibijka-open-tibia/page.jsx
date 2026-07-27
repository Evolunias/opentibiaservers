import WithDiscordTibijkaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaOpenTibiaKeywordPage />;
}
