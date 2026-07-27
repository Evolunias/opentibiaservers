import OfficialYurotsDiscordKeywordPage, { generateMetadata } from './official-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsDiscordKeywordPage />;
}
