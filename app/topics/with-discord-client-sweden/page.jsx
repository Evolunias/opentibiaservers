import WithDiscordClientSwedenKeywordPage, { generateMetadata } from './with-discord-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientSwedenKeywordPage />;
}
