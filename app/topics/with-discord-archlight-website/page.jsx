import WithDiscordArchlightWebsiteKeywordPage, { generateMetadata } from './with-discord-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightWebsiteKeywordPage />;
}
