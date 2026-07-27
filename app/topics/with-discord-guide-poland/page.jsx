import WithDiscordGuidePolandKeywordPage, { generateMetadata } from './with-discord-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuidePolandKeywordPage />;
}
