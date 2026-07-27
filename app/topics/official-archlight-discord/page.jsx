import OfficialArchlightDiscordKeywordPage, { generateMetadata } from './official-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightDiscordKeywordPage />;
}
