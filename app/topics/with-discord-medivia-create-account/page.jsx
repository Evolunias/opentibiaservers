import WithDiscordMediviaCreateAccountKeywordPage, { generateMetadata } from './with-discord-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaCreateAccountKeywordPage />;
}
