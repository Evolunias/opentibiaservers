import WithDiscordOpenTibiaServerUkKeywordPage, { generateMetadata } from './with-discord-open-tibia-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOpenTibiaServerUkKeywordPage />;
}
