import PopularUnlineDiscordKeywordPage, { generateMetadata } from './popular-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineDiscordKeywordPage />;
}
