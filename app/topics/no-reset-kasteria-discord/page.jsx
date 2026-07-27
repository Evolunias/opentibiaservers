import NoResetKasteriaDiscordKeywordPage, { generateMetadata } from './no-reset-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaDiscordKeywordPage />;
}
