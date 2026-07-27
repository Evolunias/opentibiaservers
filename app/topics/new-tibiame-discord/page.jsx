import NewTibiameDiscordKeywordPage, { generateMetadata } from './new-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameDiscordKeywordPage />;
}
