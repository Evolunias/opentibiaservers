import PopularTibiameDiscordKeywordPage, { generateMetadata } from './popular-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameDiscordKeywordPage />;
}
