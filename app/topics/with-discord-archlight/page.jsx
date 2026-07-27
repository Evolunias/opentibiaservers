import WithDiscordArchlightKeywordPage, { generateMetadata } from './with-discord-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightKeywordPage />;
}
