import WithDiscordTibijkaClientKeywordPage, { generateMetadata } from './with-discord-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaClientKeywordPage />;
}
