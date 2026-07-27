import NewUnlineDiscordKeywordPage, { generateMetadata } from './new-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineDiscordKeywordPage />;
}
