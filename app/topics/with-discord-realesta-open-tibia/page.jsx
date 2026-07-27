import WithDiscordRealestaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaOpenTibiaKeywordPage />;
}
