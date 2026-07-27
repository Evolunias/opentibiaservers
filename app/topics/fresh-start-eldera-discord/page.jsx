import FreshStartElderaDiscordKeywordPage, { generateMetadata } from './fresh-start-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaDiscordKeywordPage />;
}
