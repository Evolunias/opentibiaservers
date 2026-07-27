import HighrateImperianicDiscordKeywordPage, { generateMetadata } from './highrate-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicDiscordKeywordPage />;
}
