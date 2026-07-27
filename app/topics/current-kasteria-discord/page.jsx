import CurrentKasteriaDiscordKeywordPage, { generateMetadata } from './current-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaDiscordKeywordPage />;
}
