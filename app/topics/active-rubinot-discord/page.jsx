import ActiveRubinotDiscordKeywordPage, { generateMetadata } from './active-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotDiscordKeywordPage />;
}
