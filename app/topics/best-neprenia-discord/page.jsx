import BestNepreniaDiscordKeywordPage, { generateMetadata } from './best-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaDiscordKeywordPage />;
}
