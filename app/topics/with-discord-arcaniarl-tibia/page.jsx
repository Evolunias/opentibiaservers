import WithDiscordArcaniarlTibiaKeywordPage, { generateMetadata } from './with-discord-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlTibiaKeywordPage />;
}
