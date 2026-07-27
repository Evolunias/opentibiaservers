import HighrateThorniaDiscordKeywordPage, { generateMetadata } from './highrate-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaDiscordKeywordPage />;
}
