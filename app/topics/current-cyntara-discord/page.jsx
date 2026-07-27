import CurrentCyntaraDiscordKeywordPage, { generateMetadata } from './current-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraDiscordKeywordPage />;
}
