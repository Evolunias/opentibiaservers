import NoResetBlazeraDiscordKeywordPage, { generateMetadata } from './no-reset-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraDiscordKeywordPage />;
}
