import BestThorniaDiscordKeywordPage, { generateMetadata } from './best-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaDiscordKeywordPage />;
}
