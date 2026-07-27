import Tibia86WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordWikiKeywordPage />;
}
