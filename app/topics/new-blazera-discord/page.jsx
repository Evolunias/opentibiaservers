import NewBlazeraDiscordKeywordPage, { generateMetadata } from './new-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraDiscordKeywordPage />;
}
