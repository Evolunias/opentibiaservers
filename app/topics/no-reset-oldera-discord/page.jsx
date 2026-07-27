import NoResetOlderaDiscordKeywordPage, { generateMetadata } from './no-reset-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaDiscordKeywordPage />;
}
