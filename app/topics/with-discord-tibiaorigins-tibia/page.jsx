import WithDiscordTibiaoriginsTibiaKeywordPage, { generateMetadata } from './with-discord-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaoriginsTibiaKeywordPage />;
}
