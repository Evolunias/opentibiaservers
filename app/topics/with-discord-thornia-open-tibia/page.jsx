import WithDiscordThorniaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaOpenTibiaKeywordPage />;
}
