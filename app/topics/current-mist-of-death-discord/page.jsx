import CurrentMistOfDeathDiscordKeywordPage, { generateMetadata } from './current-mist-of-death-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMistOfDeathDiscordKeywordPage />;
}
