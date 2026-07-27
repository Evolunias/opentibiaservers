import LowExpDiscordFranceKeywordPage, { generateMetadata } from './low-exp-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordFranceKeywordPage />;
}
