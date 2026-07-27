import FreshStartClassicusDiscordKeywordPage, { generateMetadata } from './fresh-start-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusDiscordKeywordPage />;
}
