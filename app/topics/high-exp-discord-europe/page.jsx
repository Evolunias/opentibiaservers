import HighExpDiscordEuropeKeywordPage, { generateMetadata } from './high-exp-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDiscordEuropeKeywordPage />;
}
