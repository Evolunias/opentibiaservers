import WithDiscordTibiaretroForumKeywordPage, { generateMetadata } from './with-discord-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroForumKeywordPage />;
}
