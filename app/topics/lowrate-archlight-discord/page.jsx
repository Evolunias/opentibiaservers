import LowrateArchlightDiscordKeywordPage, { generateMetadata } from './lowrate-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightDiscordKeywordPage />;
}
