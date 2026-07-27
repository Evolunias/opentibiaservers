import PopularEvoleraDiscordKeywordPage, { generateMetadata } from './popular-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraDiscordKeywordPage />;
}
