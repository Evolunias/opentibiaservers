import WithDiscordEvoluniaTibiaKeywordPage, { generateMetadata } from './with-discord-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaTibiaKeywordPage />;
}
