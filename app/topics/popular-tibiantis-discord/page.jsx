import PopularTibiantisDiscordKeywordPage, { generateMetadata } from './popular-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisDiscordKeywordPage />;
}
