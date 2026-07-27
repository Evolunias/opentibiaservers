import WithDiscordXanteriaGuideKeywordPage, { generateMetadata } from './with-discord-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaGuideKeywordPage />;
}
