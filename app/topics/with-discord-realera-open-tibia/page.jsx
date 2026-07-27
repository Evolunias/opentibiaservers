import WithDiscordRealeraOpenTibiaKeywordPage, { generateMetadata } from './with-discord-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraOpenTibiaKeywordPage />;
}
