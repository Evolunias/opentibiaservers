import NewEvoleraDiscordKeywordPage, { generateMetadata } from './new-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraDiscordKeywordPage />;
}
