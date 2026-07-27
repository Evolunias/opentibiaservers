import WithDiscordCarlinotGuideKeywordPage, { generateMetadata } from './with-discord-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotGuideKeywordPage />;
}
