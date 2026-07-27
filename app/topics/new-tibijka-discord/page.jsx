import NewTibijkaDiscordKeywordPage, { generateMetadata } from './new-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaDiscordKeywordPage />;
}
