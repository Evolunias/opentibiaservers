import CurrentNepreniaDiscordKeywordPage, { generateMetadata } from './current-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaDiscordKeywordPage />;
}
