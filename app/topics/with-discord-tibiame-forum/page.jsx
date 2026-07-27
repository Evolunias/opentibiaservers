import WithDiscordTibiameForumKeywordPage, { generateMetadata } from './with-discord-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameForumKeywordPage />;
}
