import Tibia772WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-7-72-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithDiscordWikiKeywordPage />;
}
