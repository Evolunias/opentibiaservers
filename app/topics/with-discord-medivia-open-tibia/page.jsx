import WithDiscordMediviaOpenTibiaKeywordPage, { generateMetadata } from './with-discord-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaOpenTibiaKeywordPage />;
}
