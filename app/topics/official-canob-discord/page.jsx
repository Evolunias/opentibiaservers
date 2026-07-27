import OfficialCanobDiscordKeywordPage, { generateMetadata } from './official-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobDiscordKeywordPage />;
}
