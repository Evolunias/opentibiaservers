import LowExpDiscordUkKeywordPage, { generateMetadata } from './low-exp-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordUkKeywordPage />;
}
