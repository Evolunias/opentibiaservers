import OfficialTibiaoriginsDiscordKeywordPage, { generateMetadata } from './official-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsDiscordKeywordPage />;
}
