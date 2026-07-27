import WithDiscordMediviaOfficialKeywordPage, { generateMetadata } from './with-discord-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaOfficialKeywordPage />;
}
