import CurrentNostaltherDiscordKeywordPage, { generateMetadata } from './current-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherDiscordKeywordPage />;
}
