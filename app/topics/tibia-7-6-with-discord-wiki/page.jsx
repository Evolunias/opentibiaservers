import Tibia76WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordWikiKeywordPage />;
}
