import NewSerenityDiscordKeywordPage, { generateMetadata } from './new-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityDiscordKeywordPage />;
}
