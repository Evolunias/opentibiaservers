import CurrentElderaDiscordKeywordPage, { generateMetadata } from './current-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaDiscordKeywordPage />;
}
