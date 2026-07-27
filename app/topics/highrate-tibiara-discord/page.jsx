import HighrateTibiaraDiscordKeywordPage, { generateMetadata } from './highrate-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraDiscordKeywordPage />;
}
