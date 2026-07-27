import HighrateEvoleraDiscordKeywordPage, { generateMetadata } from './highrate-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraDiscordKeywordPage />;
}
