import WithDiscordOtmadnessForumKeywordPage, { generateMetadata } from './with-discord-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessForumKeywordPage />;
}
