import TopKasteriaDiscordKeywordPage, { generateMetadata } from './top-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaDiscordKeywordPage />;
}
