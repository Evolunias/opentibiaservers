import WithDiscordForumCanadaKeywordPage, { generateMetadata } from './with-discord-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumCanadaKeywordPage />;
}
