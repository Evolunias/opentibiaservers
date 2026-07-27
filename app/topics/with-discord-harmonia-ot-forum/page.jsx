import WithDiscordHarmoniaOtForumKeywordPage, { generateMetadata } from './with-discord-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordHarmoniaOtForumKeywordPage />;
}
