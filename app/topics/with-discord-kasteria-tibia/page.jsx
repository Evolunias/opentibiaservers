import WithDiscordKasteriaTibiaKeywordPage, { generateMetadata } from './with-discord-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaTibiaKeywordPage />;
}
