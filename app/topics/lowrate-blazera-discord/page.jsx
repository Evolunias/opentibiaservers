import LowrateBlazeraDiscordKeywordPage, { generateMetadata } from './lowrate-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraDiscordKeywordPage />;
}
