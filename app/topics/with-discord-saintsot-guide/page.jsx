import WithDiscordSaintsotGuideKeywordPage, { generateMetadata } from './with-discord-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotGuideKeywordPage />;
}
