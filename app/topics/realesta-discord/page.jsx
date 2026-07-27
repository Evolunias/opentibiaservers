import RealestaDiscordKeywordPage, { generateMetadata } from './realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaDiscordKeywordPage />;
}
