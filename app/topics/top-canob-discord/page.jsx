import TopCanobDiscordKeywordPage, { generateMetadata } from './top-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobDiscordKeywordPage />;
}
