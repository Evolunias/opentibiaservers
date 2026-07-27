import WithDiscordArchlightOpenTibiaKeywordPage, { generateMetadata } from './with-discord-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightOpenTibiaKeywordPage />;
}
