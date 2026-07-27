import Tibia12WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-12-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordWikiKeywordPage />;
}
