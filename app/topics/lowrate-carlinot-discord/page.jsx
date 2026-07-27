import LowrateCarlinotDiscordKeywordPage, { generateMetadata } from './lowrate-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotDiscordKeywordPage />;
}
