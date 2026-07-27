import ActiveImperianicDiscordKeywordPage, { generateMetadata } from './active-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicDiscordKeywordPage />;
}
