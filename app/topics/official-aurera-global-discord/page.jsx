import OfficialAureraGlobalDiscordKeywordPage, { generateMetadata } from './official-aurera-global-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalDiscordKeywordPage />;
}
