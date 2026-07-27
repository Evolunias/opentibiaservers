import OfficialSerenityDiscordKeywordPage, { generateMetadata } from './official-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityDiscordKeywordPage />;
}
