import LowrateNtoStarDiscordKeywordPage, { generateMetadata } from './lowrate-nto-star-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarDiscordKeywordPage />;
}
