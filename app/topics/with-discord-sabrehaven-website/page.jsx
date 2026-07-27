import WithDiscordSabrehavenWebsiteKeywordPage, { generateMetadata } from './with-discord-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenWebsiteKeywordPage />;
}
