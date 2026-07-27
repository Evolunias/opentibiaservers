import PopularTibiascapeDiscordKeywordPage, { generateMetadata } from './popular-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeDiscordKeywordPage />;
}
