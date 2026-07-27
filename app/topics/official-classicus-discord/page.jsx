import OfficialClassicusDiscordKeywordPage, { generateMetadata } from './official-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusDiscordKeywordPage />;
}
