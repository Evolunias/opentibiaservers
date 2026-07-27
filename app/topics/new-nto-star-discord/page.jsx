import NewNtoStarDiscordKeywordPage, { generateMetadata } from './new-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarDiscordKeywordPage />;
}
