import HighrateOlderaDiscordKeywordPage, { generateMetadata } from './highrate-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaDiscordKeywordPage />;
}
