import WithDiscordRealeraGuideKeywordPage, { generateMetadata } from './with-discord-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraGuideKeywordPage />;
}
