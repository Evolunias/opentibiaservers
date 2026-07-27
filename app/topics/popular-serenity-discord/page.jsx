import PopularSerenityDiscordKeywordPage, { generateMetadata } from './popular-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityDiscordKeywordPage />;
}
