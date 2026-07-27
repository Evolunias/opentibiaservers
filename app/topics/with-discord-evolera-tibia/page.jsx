import WithDiscordEvoleraTibiaKeywordPage, { generateMetadata } from './with-discord-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraTibiaKeywordPage />;
}
