import FunServerDiscordKeywordPage, { generateMetadata } from './fun-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerDiscordKeywordPage />;
}
