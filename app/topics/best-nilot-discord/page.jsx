import BestNilotDiscordKeywordPage, { generateMetadata } from './best-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotDiscordKeywordPage />;
}
