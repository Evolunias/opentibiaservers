import NoResetRubinotDiscordKeywordPage, { generateMetadata } from './no-reset-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotDiscordKeywordPage />;
}
