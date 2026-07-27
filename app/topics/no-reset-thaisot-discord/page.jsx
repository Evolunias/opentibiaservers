import NoResetThaisotDiscordKeywordPage, { generateMetadata } from './no-reset-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotDiscordKeywordPage />;
}
