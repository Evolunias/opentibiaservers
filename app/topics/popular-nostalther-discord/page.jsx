import PopularNostaltherDiscordKeywordPage, { generateMetadata } from './popular-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherDiscordKeywordPage />;
}
