import CurrentTibijkaDiscordKeywordPage, { generateMetadata } from './current-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaDiscordKeywordPage />;
}
