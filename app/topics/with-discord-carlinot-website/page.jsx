import WithDiscordCarlinotWebsiteKeywordPage, { generateMetadata } from './with-discord-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotWebsiteKeywordPage />;
}
