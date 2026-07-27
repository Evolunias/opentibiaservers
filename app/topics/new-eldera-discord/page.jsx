import NewElderaDiscordKeywordPage, { generateMetadata } from './new-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaDiscordKeywordPage />;
}
