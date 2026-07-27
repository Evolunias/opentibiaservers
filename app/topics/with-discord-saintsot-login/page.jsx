import WithDiscordSaintsotLoginKeywordPage, { generateMetadata } from './with-discord-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotLoginKeywordPage />;
}
