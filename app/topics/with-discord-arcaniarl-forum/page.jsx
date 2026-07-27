import WithDiscordArcaniarlForumKeywordPage, { generateMetadata } from './with-discord-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlForumKeywordPage />;
}
