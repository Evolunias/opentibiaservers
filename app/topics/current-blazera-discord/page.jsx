import CurrentBlazeraDiscordKeywordPage, { generateMetadata } from './current-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraDiscordKeywordPage />;
}
