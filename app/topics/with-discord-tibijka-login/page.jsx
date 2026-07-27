import WithDiscordTibijkaLoginKeywordPage, { generateMetadata } from './with-discord-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaLoginKeywordPage />;
}
