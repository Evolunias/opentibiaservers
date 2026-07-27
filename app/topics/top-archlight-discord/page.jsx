import TopArchlightDiscordKeywordPage, { generateMetadata } from './top-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightDiscordKeywordPage />;
}
