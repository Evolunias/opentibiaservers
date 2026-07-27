import HighrateCarlinotDiscordKeywordPage, { generateMetadata } from './highrate-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotDiscordKeywordPage />;
}
