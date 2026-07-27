import HighExpDiscordFranceKeywordPage, { generateMetadata } from './high-exp-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDiscordFranceKeywordPage />;
}
