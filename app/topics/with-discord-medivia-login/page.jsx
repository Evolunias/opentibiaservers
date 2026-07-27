import WithDiscordMediviaLoginKeywordPage, { generateMetadata } from './with-discord-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaLoginKeywordPage />;
}
