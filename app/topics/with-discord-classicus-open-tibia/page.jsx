import WithDiscordClassicusOpenTibiaKeywordPage, { generateMetadata } from './with-discord-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusOpenTibiaKeywordPage />;
}
