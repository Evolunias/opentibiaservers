import WithDiscordForumFranceKeywordPage, { generateMetadata } from './with-discord-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumFranceKeywordPage />;
}
