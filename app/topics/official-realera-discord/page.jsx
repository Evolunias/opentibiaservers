import OfficialRealeraDiscordKeywordPage, { generateMetadata } from './official-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraDiscordKeywordPage />;
}
