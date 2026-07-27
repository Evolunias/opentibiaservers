import WithDiscordImperianicKeywordPage, { generateMetadata } from './with-discord-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordImperianicKeywordPage />;
}
