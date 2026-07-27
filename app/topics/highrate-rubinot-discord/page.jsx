import HighrateRubinotDiscordKeywordPage, { generateMetadata } from './highrate-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotDiscordKeywordPage />;
}
