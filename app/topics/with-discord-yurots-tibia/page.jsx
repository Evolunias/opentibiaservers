import WithDiscordYurotsTibiaKeywordPage, { generateMetadata } from './with-discord-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsTibiaKeywordPage />;
}
