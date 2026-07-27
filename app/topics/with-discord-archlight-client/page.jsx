import WithDiscordArchlightClientKeywordPage, { generateMetadata } from './with-discord-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightClientKeywordPage />;
}
