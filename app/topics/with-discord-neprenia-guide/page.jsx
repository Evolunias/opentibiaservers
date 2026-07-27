import WithDiscordNepreniaGuideKeywordPage, { generateMetadata } from './with-discord-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaGuideKeywordPage />;
}
