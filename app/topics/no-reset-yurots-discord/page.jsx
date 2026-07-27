import NoResetYurotsDiscordKeywordPage, { generateMetadata } from './no-reset-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsDiscordKeywordPage />;
}
