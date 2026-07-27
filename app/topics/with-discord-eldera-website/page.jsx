import WithDiscordElderaWebsiteKeywordPage, { generateMetadata } from './with-discord-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaWebsiteKeywordPage />;
}
