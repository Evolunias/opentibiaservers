import OfficialCoxaotDiscordKeywordPage, { generateMetadata } from './official-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotDiscordKeywordPage />;
}
