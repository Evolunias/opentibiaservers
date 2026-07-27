import LowrateEvoleraDiscordKeywordPage, { generateMetadata } from './lowrate-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraDiscordKeywordPage />;
}
