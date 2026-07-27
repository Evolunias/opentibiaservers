import OfficialNtoStarDiscordKeywordPage, { generateMetadata } from './official-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarDiscordKeywordPage />;
}
