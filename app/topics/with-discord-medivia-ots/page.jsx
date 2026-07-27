import WithDiscordMediviaOtsKeywordPage, { generateMetadata } from './with-discord-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaOtsKeywordPage />;
}
