import TopRealestaDiscordKeywordPage, { generateMetadata } from './top-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaDiscordKeywordPage />;
}
