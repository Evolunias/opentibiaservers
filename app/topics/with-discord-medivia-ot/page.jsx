import WithDiscordMediviaOtKeywordPage, { generateMetadata } from './with-discord-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaOtKeywordPage />;
}
