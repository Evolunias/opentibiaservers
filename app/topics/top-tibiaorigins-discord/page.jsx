import TopTibiaoriginsDiscordKeywordPage, { generateMetadata } from './top-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsDiscordKeywordPage />;
}
