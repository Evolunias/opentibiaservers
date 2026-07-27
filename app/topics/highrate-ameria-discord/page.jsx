import HighrateAmeriaDiscordKeywordPage, { generateMetadata } from './highrate-ameria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaDiscordKeywordPage />;
}
