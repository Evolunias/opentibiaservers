import FreshStartSerenityDiscordKeywordPage, { generateMetadata } from './fresh-start-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityDiscordKeywordPage />;
}
