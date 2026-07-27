import WithDiscordMediviaForumKeywordPage, { generateMetadata } from './with-discord-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaForumKeywordPage />;
}
