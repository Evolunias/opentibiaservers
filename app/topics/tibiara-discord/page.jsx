import TibiaraDiscordKeywordPage, { generateMetadata } from './tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraDiscordKeywordPage />;
}
