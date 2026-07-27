import Tibia74WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-7-4-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithDiscordWikiKeywordPage />;
}
