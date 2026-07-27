import ActiveKasteriaDiscordKeywordPage, { generateMetadata } from './active-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaDiscordKeywordPage />;
}
