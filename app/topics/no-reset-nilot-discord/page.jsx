import NoResetNilotDiscordKeywordPage, { generateMetadata } from './no-reset-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotDiscordKeywordPage />;
}
