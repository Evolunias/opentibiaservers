import WithDiscordCoxaotWebsiteKeywordPage, { generateMetadata } from './with-discord-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotWebsiteKeywordPage />;
}
