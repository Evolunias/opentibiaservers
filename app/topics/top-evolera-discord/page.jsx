import TopEvoleraDiscordKeywordPage, { generateMetadata } from './top-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraDiscordKeywordPage />;
}
