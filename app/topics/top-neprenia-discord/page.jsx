import TopNepreniaDiscordKeywordPage, { generateMetadata } from './top-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaDiscordKeywordPage />;
}
