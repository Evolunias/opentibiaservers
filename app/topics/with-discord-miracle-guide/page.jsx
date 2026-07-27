import WithDiscordMiracleGuideKeywordPage, { generateMetadata } from './with-discord-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleGuideKeywordPage />;
}
