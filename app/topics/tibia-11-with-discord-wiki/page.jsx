import Tibia11WithDiscordWikiKeywordPage, { generateMetadata } from './tibia-11-with-discord-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordWikiKeywordPage />;
}
