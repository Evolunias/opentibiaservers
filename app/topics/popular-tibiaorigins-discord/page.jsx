import PopularTibiaoriginsDiscordKeywordPage, { generateMetadata } from './popular-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsDiscordKeywordPage />;
}
