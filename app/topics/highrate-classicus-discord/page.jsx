import HighrateClassicusDiscordKeywordPage, { generateMetadata } from './highrate-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusDiscordKeywordPage />;
}
