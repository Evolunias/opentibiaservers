import CustomMapDiscordEuropeKeywordPage, { generateMetadata } from './custom-map-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordEuropeKeywordPage />;
}
