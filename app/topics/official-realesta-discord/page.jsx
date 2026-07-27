import OfficialRealestaDiscordKeywordPage, { generateMetadata } from './official-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaDiscordKeywordPage />;
}
