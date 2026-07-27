import WithDiscordThaisotTibiaKeywordPage, { generateMetadata } from './with-discord-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotTibiaKeywordPage />;
}
