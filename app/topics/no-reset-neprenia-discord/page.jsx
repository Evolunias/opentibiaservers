import NoResetNepreniaDiscordKeywordPage, { generateMetadata } from './no-reset-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaDiscordKeywordPage />;
}
