import OfficialMistOfDeathDiscordKeywordPage, { generateMetadata } from './official-mist-of-death-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMistOfDeathDiscordKeywordPage />;
}
