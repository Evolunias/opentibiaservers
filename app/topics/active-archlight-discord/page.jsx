import ActiveArchlightDiscordKeywordPage, { generateMetadata } from './active-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightDiscordKeywordPage />;
}
