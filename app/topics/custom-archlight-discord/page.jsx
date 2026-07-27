import CustomArchlightDiscordKeywordPage, { generateMetadata } from './custom-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightDiscordKeywordPage />;
}
