import WithDiscordMediviaRegisterKeywordPage, { generateMetadata } from './with-discord-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaRegisterKeywordPage />;
}
