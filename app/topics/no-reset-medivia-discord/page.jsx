import NoResetMediviaDiscordKeywordPage, { generateMetadata } from './no-reset-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaDiscordKeywordPage />;
}
