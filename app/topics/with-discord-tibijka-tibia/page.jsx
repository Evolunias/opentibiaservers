import WithDiscordTibijkaTibiaKeywordPage, { generateMetadata } from './with-discord-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaTibiaKeywordPage />;
}
