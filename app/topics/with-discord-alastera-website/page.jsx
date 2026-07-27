import WithDiscordAlasteraWebsiteKeywordPage, { generateMetadata } from './with-discord-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraWebsiteKeywordPage />;
}
