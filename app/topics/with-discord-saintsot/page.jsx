import WithDiscordSaintsotKeywordPage, { generateMetadata } from './with-discord-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotKeywordPage />;
}
