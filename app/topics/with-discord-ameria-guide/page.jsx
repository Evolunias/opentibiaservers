import WithDiscordAmeriaGuideKeywordPage, { generateMetadata } from './with-discord-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaGuideKeywordPage />;
}
