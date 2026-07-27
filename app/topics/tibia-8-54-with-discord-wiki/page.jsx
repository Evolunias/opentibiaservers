import Tibia854WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-8-54-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithDiscordWikiKeywordPage />;
}
