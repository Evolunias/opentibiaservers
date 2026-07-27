import CustomMapDiscordMexicoKeywordPage, { generateMetadata } from './custom-map-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordMexicoKeywordPage />;
}
