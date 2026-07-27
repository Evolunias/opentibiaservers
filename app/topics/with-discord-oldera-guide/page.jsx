import WithDiscordOlderaGuideKeywordPage, { generateMetadata } from './with-discord-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaGuideKeywordPage />;
}
