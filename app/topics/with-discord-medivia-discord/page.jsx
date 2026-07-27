import WithDiscordMediviaDiscordKeywordPage, { generateMetadata } from './with-discord-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaDiscordKeywordPage />;
}
