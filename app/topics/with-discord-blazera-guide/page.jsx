import WithDiscordBlazeraGuideKeywordPage, { generateMetadata } from './with-discord-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraGuideKeywordPage />;
}
