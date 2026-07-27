import NoResetCanobDiscordKeywordPage, { generateMetadata } from './no-reset-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobDiscordKeywordPage />;
}
