import BestRealestaDiscordKeywordPage, { generateMetadata } from './best-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaDiscordKeywordPage />;
}
