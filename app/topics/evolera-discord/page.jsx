import EvoleraDiscordKeywordPage, { generateMetadata } from './evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraDiscordKeywordPage />;
}
