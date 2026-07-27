import CurrentUnlineDiscordKeywordPage, { generateMetadata } from './current-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineDiscordKeywordPage />;
}
