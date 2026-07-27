import Tibia14WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-14-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordWikiKeywordPage />;
}
