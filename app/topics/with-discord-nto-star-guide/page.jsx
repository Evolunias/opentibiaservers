import WithDiscordNtoStarGuideKeywordPage, { generateMetadata } from './with-discord-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarGuideKeywordPage />;
}
