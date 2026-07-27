import HighrateBlazeraDiscordKeywordPage, { generateMetadata } from './highrate-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraDiscordKeywordPage />;
}
