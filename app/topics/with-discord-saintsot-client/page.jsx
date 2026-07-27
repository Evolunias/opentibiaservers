import WithDiscordSaintsotClientKeywordPage, { generateMetadata } from './with-discord-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotClientKeywordPage />;
}
