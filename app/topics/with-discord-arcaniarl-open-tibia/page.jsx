import WithDiscordArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './with-discord-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlOpenTibiaKeywordPage />;
}
