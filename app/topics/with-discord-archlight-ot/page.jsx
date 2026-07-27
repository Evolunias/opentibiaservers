import WithDiscordArchlightOtKeywordPage, { generateMetadata } from './with-discord-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightOtKeywordPage />;
}
