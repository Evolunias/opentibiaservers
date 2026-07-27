import WithDiscordCarlinotForumKeywordPage, { generateMetadata } from './with-discord-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotForumKeywordPage />;
}
