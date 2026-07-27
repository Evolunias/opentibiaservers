import Tibia13WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-13-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordWikiKeywordPage />;
}
