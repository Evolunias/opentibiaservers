import CurrentRealestaDiscordKeywordPage, { generateMetadata } from './current-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaDiscordKeywordPage />;
}
