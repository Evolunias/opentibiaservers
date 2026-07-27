import Tibia100WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordWikiKeywordPage />;
}
