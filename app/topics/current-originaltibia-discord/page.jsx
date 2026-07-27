import CurrentOriginaltibiaDiscordKeywordPage, { generateMetadata } from './current-originaltibia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaDiscordKeywordPage />;
}
