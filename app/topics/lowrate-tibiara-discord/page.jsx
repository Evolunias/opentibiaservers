import LowrateTibiaraDiscordKeywordPage, { generateMetadata } from './lowrate-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraDiscordKeywordPage />;
}
