import TopTibiameDiscordKeywordPage, { generateMetadata } from './top-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameDiscordKeywordPage />;
}
