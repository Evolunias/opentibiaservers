import WithDiscordGuideUkKeywordPage, { generateMetadata } from './with-discord-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideUkKeywordPage />;
}
