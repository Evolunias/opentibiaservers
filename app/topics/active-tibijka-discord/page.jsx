import ActiveTibijkaDiscordKeywordPage, { generateMetadata } from './active-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaDiscordKeywordPage />;
}
