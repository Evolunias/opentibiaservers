import WithDiscordSaintsotDiscordKeywordPage, { generateMetadata } from './with-discord-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotDiscordKeywordPage />;
}
