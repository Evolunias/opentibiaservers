import ActiveRealestaDiscordKeywordPage, { generateMetadata } from './active-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaDiscordKeywordPage />;
}
