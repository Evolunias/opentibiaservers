import NoResetCyntaraDiscordKeywordPage, { generateMetadata } from './no-reset-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraDiscordKeywordPage />;
}
