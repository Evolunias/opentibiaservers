import WithDiscordGunzodusForumKeywordPage, { generateMetadata } from './with-discord-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusForumKeywordPage />;
}
