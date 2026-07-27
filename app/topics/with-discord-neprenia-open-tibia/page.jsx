import WithDiscordNepreniaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaOpenTibiaKeywordPage />;
}
