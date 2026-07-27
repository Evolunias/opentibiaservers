import WithDiscordMediviaKeywordPage, { generateMetadata } from './with-discord-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaKeywordPage />;
}
