import CurrentMediviaDiscordKeywordPage, { generateMetadata } from './current-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaDiscordKeywordPage />;
}
