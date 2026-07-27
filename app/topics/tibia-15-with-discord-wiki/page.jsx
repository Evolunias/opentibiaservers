import Tibia15WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-15-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordWikiKeywordPage />;
}
