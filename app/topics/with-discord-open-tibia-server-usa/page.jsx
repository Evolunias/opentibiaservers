import WithDiscordOpenTibiaServerUsaKeywordPage, { generateMetadata } from './with-discord-open-tibia-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOpenTibiaServerUsaKeywordPage />;
}
