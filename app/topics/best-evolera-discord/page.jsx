import BestEvoleraDiscordKeywordPage, { generateMetadata } from './best-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraDiscordKeywordPage />;
}
