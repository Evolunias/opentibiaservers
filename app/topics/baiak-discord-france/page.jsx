import BaiakDiscordFranceKeywordPage, { generateMetadata } from './baiak-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordFranceKeywordPage />;
}
