import NewClassicusDiscordKeywordPage, { generateMetadata } from './new-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusDiscordKeywordPage />;
}
