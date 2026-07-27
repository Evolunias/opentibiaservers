import ActiveCanobDiscordKeywordPage, { generateMetadata } from './active-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobDiscordKeywordPage />;
}
