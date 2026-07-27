import WithDiscordShadowcoresForumKeywordPage, { generateMetadata } from './with-discord-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresForumKeywordPage />;
}
