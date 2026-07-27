import WithDiscordTibiaraTibiaKeywordPage, { generateMetadata } from './with-discord-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraTibiaKeywordPage />;
}
