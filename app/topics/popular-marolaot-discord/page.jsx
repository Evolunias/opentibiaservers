import PopularMarolaotDiscordKeywordPage, { generateMetadata } from './popular-marolaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotDiscordKeywordPage />;
}
