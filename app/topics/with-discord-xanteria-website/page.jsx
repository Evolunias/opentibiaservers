import WithDiscordXanteriaWebsiteKeywordPage, { generateMetadata } from './with-discord-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaWebsiteKeywordPage />;
}
