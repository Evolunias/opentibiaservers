import ActiveEvoleraDiscordKeywordPage, { generateMetadata } from './active-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraDiscordKeywordPage />;
}
