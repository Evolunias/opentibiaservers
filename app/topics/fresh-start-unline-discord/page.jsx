import FreshStartUnlineDiscordKeywordPage, { generateMetadata } from './fresh-start-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineDiscordKeywordPage />;
}
