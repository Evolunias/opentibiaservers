import WithDiscordKasteriaGuideKeywordPage, { generateMetadata } from './with-discord-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaGuideKeywordPage />;
}
