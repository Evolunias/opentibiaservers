import NewOlderaDiscordKeywordPage, { generateMetadata } from './new-oldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaDiscordKeywordPage />;
}
