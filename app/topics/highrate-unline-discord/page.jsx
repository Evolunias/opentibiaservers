import HighrateUnlineDiscordKeywordPage, { generateMetadata } from './highrate-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineDiscordKeywordPage />;
}
