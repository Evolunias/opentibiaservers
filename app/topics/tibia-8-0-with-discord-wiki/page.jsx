import Tibia80WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordWikiKeywordPage />;
}
