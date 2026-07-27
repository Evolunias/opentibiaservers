import WithDiscordEvoluniaForumKeywordPage, { generateMetadata } from './with-discord-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaForumKeywordPage />;
}
