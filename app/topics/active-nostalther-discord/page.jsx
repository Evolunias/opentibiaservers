import ActiveNostaltherDiscordKeywordPage, { generateMetadata } from './active-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherDiscordKeywordPage />;
}
