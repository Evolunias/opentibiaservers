import NewNepreniaDiscordKeywordPage, { generateMetadata } from './new-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaDiscordKeywordPage />;
}
