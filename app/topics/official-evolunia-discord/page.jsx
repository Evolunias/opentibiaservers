import OfficialEvoluniaDiscordKeywordPage, { generateMetadata } from './official-evolunia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaDiscordKeywordPage />;
}
