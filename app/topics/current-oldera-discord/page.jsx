import CurrentOlderaDiscordKeywordPage, { generateMetadata } from './current-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaDiscordKeywordPage />;
}
