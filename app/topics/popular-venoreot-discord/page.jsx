import PopularVenoreotDiscordKeywordPage, { generateMetadata } from './popular-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotDiscordKeywordPage />;
}
