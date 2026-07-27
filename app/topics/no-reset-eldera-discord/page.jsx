import NoResetElderaDiscordKeywordPage, { generateMetadata } from './no-reset-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaDiscordKeywordPage />;
}
