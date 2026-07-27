import OfficialBlazeraDiscordKeywordPage, { generateMetadata } from './official-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraDiscordKeywordPage />;
}
