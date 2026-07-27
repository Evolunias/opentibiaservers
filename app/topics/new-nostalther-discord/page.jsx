import NewNostaltherDiscordKeywordPage, { generateMetadata } from './new-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherDiscordKeywordPage />;
}
