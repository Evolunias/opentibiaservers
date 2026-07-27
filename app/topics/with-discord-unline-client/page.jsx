import WithDiscordUnlineClientKeywordPage, { generateMetadata } from './with-discord-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineClientKeywordPage />;
}
