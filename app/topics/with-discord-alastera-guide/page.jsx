import WithDiscordAlasteraGuideKeywordPage, { generateMetadata } from './with-discord-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraGuideKeywordPage />;
}
