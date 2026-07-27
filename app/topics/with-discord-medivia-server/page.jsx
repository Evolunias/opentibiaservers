import WithDiscordMediviaServerKeywordPage, { generateMetadata } from './with-discord-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaServerKeywordPage />;
}
