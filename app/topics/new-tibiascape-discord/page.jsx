import NewTibiascapeDiscordKeywordPage, { generateMetadata } from './new-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeDiscordKeywordPage />;
}
