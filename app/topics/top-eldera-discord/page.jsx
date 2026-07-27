import TopElderaDiscordKeywordPage, { generateMetadata } from './top-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaDiscordKeywordPage />;
}
