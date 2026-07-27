import NewRealestaDiscordKeywordPage, { generateMetadata } from './new-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaDiscordKeywordPage />;
}
