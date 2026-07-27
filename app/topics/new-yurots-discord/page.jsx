import NewYurotsDiscordKeywordPage, { generateMetadata } from './new-yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsDiscordKeywordPage />;
}
