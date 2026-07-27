import ActiveNepreniaDiscordKeywordPage, { generateMetadata } from './active-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaDiscordKeywordPage />;
}
