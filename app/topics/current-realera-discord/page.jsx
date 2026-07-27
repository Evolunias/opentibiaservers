import CurrentRealeraDiscordKeywordPage, { generateMetadata } from './current-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraDiscordKeywordPage />;
}
