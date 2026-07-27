import WithDiscordCanobGuideKeywordPage, { generateMetadata } from './with-discord-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobGuideKeywordPage />;
}
