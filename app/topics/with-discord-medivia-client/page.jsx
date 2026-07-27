import WithDiscordMediviaClientKeywordPage, { generateMetadata } from './with-discord-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaClientKeywordPage />;
}
