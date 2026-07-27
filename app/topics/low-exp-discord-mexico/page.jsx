import LowExpDiscordMexicoKeywordPage, { generateMetadata } from './low-exp-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordMexicoKeywordPage />;
}
