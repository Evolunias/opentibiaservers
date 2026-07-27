import HighExpDiscordUkKeywordPage, { generateMetadata } from './high-exp-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpDiscordUkKeywordPage />;
}
