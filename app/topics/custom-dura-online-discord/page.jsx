import CustomDuraOnlineDiscordKeywordPage, { generateMetadata } from './custom-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlineDiscordKeywordPage />;
}
