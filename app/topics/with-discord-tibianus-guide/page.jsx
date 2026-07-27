import WithDiscordTibianusGuideKeywordPage, { generateMetadata } from './with-discord-tibianus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusGuideKeywordPage />;
}
