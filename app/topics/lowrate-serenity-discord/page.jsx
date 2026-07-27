import LowrateSerenityDiscordKeywordPage, { generateMetadata } from './lowrate-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityDiscordKeywordPage />;
}
