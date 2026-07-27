import CurrentSerenityDiscordKeywordPage, { generateMetadata } from './current-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityDiscordKeywordPage />;
}
