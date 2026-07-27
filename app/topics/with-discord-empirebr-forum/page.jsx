import WithDiscordEmpirebrForumKeywordPage, { generateMetadata } from './with-discord-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrForumKeywordPage />;
}
