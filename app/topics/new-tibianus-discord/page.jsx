import NewTibianusDiscordKeywordPage, { generateMetadata } from './new-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusDiscordKeywordPage />;
}
