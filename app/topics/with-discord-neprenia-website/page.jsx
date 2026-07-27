import WithDiscordNepreniaWebsiteKeywordPage, { generateMetadata } from './with-discord-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaWebsiteKeywordPage />;
}
