import BestNostaltherDiscordKeywordPage, { generateMetadata } from './best-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherDiscordKeywordPage />;
}
