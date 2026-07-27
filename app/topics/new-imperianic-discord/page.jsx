import NewImperianicDiscordKeywordPage, { generateMetadata } from './new-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicDiscordKeywordPage />;
}
