import NewRealeraDiscordKeywordPage, { generateMetadata } from './new-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraDiscordKeywordPage />;
}
