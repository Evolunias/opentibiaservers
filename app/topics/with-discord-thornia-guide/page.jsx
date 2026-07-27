import WithDiscordThorniaGuideKeywordPage, { generateMetadata } from './with-discord-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaGuideKeywordPage />;
}
