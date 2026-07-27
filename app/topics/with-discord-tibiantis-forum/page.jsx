import WithDiscordTibiantisForumKeywordPage, { generateMetadata } from './with-discord-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisForumKeywordPage />;
}
