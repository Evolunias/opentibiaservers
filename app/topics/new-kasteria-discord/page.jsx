import NewKasteriaDiscordKeywordPage, { generateMetadata } from './new-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaDiscordKeywordPage />;
}
