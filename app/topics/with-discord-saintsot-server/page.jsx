import WithDiscordSaintsotServerKeywordPage, { generateMetadata } from './with-discord-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotServerKeywordPage />;
}
