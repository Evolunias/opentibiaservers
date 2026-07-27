import WithDiscordTibianusOpenTibiaKeywordPage, { generateMetadata } from './with-discord-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusOpenTibiaKeywordPage />;
}
