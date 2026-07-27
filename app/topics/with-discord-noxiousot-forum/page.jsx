import WithDiscordNoxiousotForumKeywordPage, { generateMetadata } from './with-discord-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotForumKeywordPage />;
}
