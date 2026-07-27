import WithDiscordYurotsOpenTibiaKeywordPage, { generateMetadata } from './with-discord-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsOpenTibiaKeywordPage />;
}
